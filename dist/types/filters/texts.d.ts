import * as dmp from 'diff-match-patch';
import type DiffContext from '../contexts/diff';
import type PatchContext from '../contexts/patch';
import type ReverseContext from '../contexts/reverse';
import type { Filter } from '../types';
declare global {
    const diff_match_patch: typeof dmp | undefined;
}
export declare const diffFilter: Filter<DiffContext>;
export declare const patchFilter: Filter<PatchContext>;
export declare const reverseFilter: Filter<ReverseContext>;
