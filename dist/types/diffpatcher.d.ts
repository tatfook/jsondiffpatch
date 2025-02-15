import Processor from './processor';
import type { Delta, Options } from './types';
declare class DiffPatcher {
    processor: Processor;
    constructor(options?: Options);
    options(options: Options): Options;
    diff(left: unknown, right: unknown): Delta;
    patch(left: unknown, delta: Delta): unknown;
    reverse(delta: Delta): Delta;
    unpatch(right: unknown, delta: Delta): unknown;
    clone(value: unknown): unknown;
}
export default DiffPatcher;
