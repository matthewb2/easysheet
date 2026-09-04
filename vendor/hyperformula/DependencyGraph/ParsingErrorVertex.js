/**
 * @license
 * Copyright (c) 2025 Handsoncode. All rights reserved.
 */
import { CellError } from '../Cell';
import { CellVertex } from './CellVertex';
/**
 * Represents a cell that contains a parsing error.
 */
export class ParsingErrorVertex extends CellVertex {
    /**
     * Constructor
     */
    constructor(errors, rawInput) {
        super();
        this.errors = errors;
        this.rawInput = rawInput;
    }
    /**
     * Returns the value of the cell.
     */
    getCellValue() {
        const firstNonemptyMessage = this.errors.map(error => error.message).find((msg) => msg);
        return CellError.parsingError(firstNonemptyMessage);
    }
    /**
     * Returns the formula of the cell.
     */
    getFormula() {
        return this.rawInput;
    }
}
