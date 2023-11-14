import DiffContext from '../contexts/diff';
import PatchContext from '../contexts/patch';
import ReverseContext from '../contexts/reverse';
import type { Filter } from '../types';
export interface MatchContext {
    objectHash?: ((item: object, index?: number) => string | undefined) | undefined;
    matchByPosition?: boolean | undefined;
    hashCache1?: (string | undefined)[];
    hashCache2?: (string | undefined)[];
}
export declare const diffFilter: Filter<DiffContext>;
export declare const patchFilter: Filter<PatchContext>;
export declare const collectChildrenPatchFilter: Filter<PatchContext>;
export declare const reverseFilter: Filter<ReverseContext>;
export declare const collectChildrenReverseFilter: Filter<ReverseContext>;
