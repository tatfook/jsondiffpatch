import Context from './context';
import type { Delta } from '../types';
declare class DiffContext extends Context<Delta> {
    left: unknown;
    right: unknown;
    pipe: 'diff';
    leftType?: string;
    rightType?: string;
    leftIsArray?: boolean;
    rightIsArray?: boolean;
    constructor(left: unknown, right: unknown);
    setResult(result: Delta): this;
}
export default DiffContext;
