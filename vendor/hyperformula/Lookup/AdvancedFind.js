/**
 * @license
 * Copyright (c) 2025 Handsoncode. All rights reserved.
 */
import { EmptyValue, getRawValue } from '../interpreter/InterpreterValue';
import { forceNormalizeString } from '../interpreter/ArithmeticHelper';
import { compare, findLastOccurrenceInOrderedRange } from '../interpreter/binarySearch';
const NOT_FOUND = -1;
export class AdvancedFind {
    constructor(dependencyGraph) {
        this.dependencyGraph = dependencyGraph;
    }
    advancedFind(keyMatcher, rangeValue, { returnOccurrence } = { returnOccurrence: 'first' }) {
        const range = rangeValue.range;
        const values = (range === undefined)
            ? rangeValue.valuesFromTopLeftCorner()
            : this.dependencyGraph.computeListOfValuesInRange(range);
        const initialIterationIndex = returnOccurrence === 'first' ? 0 : values.length - 1;
        const iterationCondition = returnOccurrence === 'first' ? (i) => i < values.length : (i) => i >= 0;
        const incrementIndex = returnOccurrence === 'first' ? (i) => i + 1 : (i) => i - 1;
        for (let i = initialIterationIndex; iterationCondition(i); i = incrementIndex(i)) {
            if (keyMatcher(getRawValue(values[i]))) {
                return i;
            }
        }
        return NOT_FOUND;
    }
    basicFind(searchKey, rangeValue, searchCoordinate, { ordering, ifNoMatch, returnOccurrence }) {
        const normalizedSearchKey = typeof searchKey === 'string' ? forceNormalizeString(searchKey) : searchKey;
        const range = rangeValue.range;
        if (range === undefined) {
            return this.findNormalizedValue(normalizedSearchKey, rangeValue.valuesFromTopLeftCorner(), ifNoMatch, returnOccurrence);
        }
        if (ordering === 'none') {
            return this.findNormalizedValue(normalizedSearchKey, this.dependencyGraph.computeListOfValuesInRange(range), ifNoMatch, returnOccurrence);
        }
        return findLastOccurrenceInOrderedRange(normalizedSearchKey, range, { searchCoordinate, orderingDirection: ordering, ifNoMatch }, this.dependencyGraph);
    }
    /**
     * Linear search over an in-memory array for the value equal to `searchKey`, or — when `ifNoMatch`
     * is `returnLowerBound`/`returnUpperBound` — the closest non-exceeding/non-preceding value.
     * Genuinely empty cells (`EmptyValue`) are skipped, consistent with `findLastOccurrenceInOrderedRange`
     * and with Excel/Google Sheets, which ignore empty cells (but not empty strings) in approximate search.
     * Returns the 0-based index into `searchArray`, or `NOT_FOUND` (-1) when nothing matches.
     */
    findNormalizedValue(searchKey, searchArray, ifNoMatch = 'returnNotFound', returnOccurrence = 'first') {
        const normalizedArray = searchArray
            .map(getRawValue)
            .map(val => typeof val === 'string' ? forceNormalizeString(val) : val);
        if (ifNoMatch === 'returnNotFound') {
            return returnOccurrence === 'first' ? normalizedArray.indexOf(searchKey) : normalizedArray.lastIndexOf(searchKey);
        }
        const compareFn = ifNoMatch === 'returnLowerBound'
            ? (left, right) => compare(left, right)
            : (left, right) => -compare(left, right);
        let bestValue = ifNoMatch === 'returnLowerBound' ? -Infinity : Infinity;
        let bestIndex = NOT_FOUND;
        const initialIterationIndex = returnOccurrence === 'first' ? 0 : normalizedArray.length - 1;
        const iterationCondition = returnOccurrence === 'first' ? (i) => i < normalizedArray.length : (i) => i >= 0;
        const incrementIndex = returnOccurrence === 'first' ? (i) => i + 1 : (i) => i - 1;
        for (let i = initialIterationIndex; iterationCondition(i); i = incrementIndex(i)) {
            const value = normalizedArray[i];
            if (value === searchKey) {
                return i;
            }
            // Skip empty cells in the approximate search, consistent with findLastOccurrenceInOrderedRange:
            // Excel/Google Sheets ignore genuinely empty cells (but not empty strings) when looking for the
            // lower/upper bound. EmptyValue would otherwise be ranked below every value by compare().
            if (value === EmptyValue) {
                continue;
            }
            if (compareFn(value, searchKey) > 0) {
                continue;
            }
            if (compareFn(bestValue, value) < 0) {
                bestValue = value;
                bestIndex = i;
            }
        }
        return bestIndex;
    }
}
