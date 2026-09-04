/**
 * @license
 * Copyright (c) 2025 Handsoncode. All rights reserved.
 */
/**
 * The function categories, in the order the built-in functions guide page presents them. This array is the source of
 * truth: `script/renderBuiltinFunctionsTable.ts` emits one `### <Category>` section per entry that has functions, in
 * this order, and the page's table of contents is generated from that same pass &mdash; so reordering, renaming or
 * removing a category here updates the contents list with it, and nothing has to be kept in sync by hand.
 *
 * The ten categories with an Excel equivalent use the same names as the official Excel docs
 * (https://support.microsoft.com/en-us/office/excel-functions-by-category-5f91f4e9-7b42-46d2-9bd1-63f26a86c0eb),
 * which name them in full words (e.g. "Math and trigonometry functions", "Lookup and reference functions") rather
 * than the abbreviated ribbon labels ("Math & Trig", "Lookup & Reference"). `Array manipulation`, `Matrix functions`
 * and `Operator` are HyperFormula-specific and have no Excel equivalent.
 *
 * This is the *documented* category set &mdash; the categories a catalogue entry may declare and the only ones the
 * generated page renders. [[CUSTOM_FUNCTION_CATEGORY]] is deliberately NOT a member: it names no section of that page,
 * and `script/renderBuiltinFunctionsTable.ts` rejects an entry declaring it rather than dropping the entry silently.
 */
export const FUNCTION_CATEGORIES = [
    'Array manipulation', 'Database', 'Date and time', 'Engineering',
    'Financial', 'Information', 'Logical', 'Lookup and reference',
    'Math and trigonometry', 'Matrix functions', 'Operator', 'Statistical', 'Text',
];
/**
 * The category reported for a custom (user-registered) function. Such a function ships no catalogue entry, so it has
 * none of the documented categories &mdash; but `category` is a required field, so it is reported under this one
 * rather than by omitting the key. Not a member of [[FUNCTION_CATEGORIES]]: it names no section of the built-in
 * functions guide page.
 */
export const CUSTOM_FUNCTION_CATEGORY = 'Custom';
