export type RouteKeys =
    | 'has'
    | 'animating-grid'
    | 'dynamic-viewport-units'
    | 'container-queries'
    | 'text-wrap-balance'
    | 'cascade-layers'
    | 'scoped-css'
    | 'subgrid'
    | 'popover'
    | 'css-anchor'
    | 'discrete-property'
    | 'scroll-driven-animations'
    | 'view-transition'
    | 'thanks';

type Routes = {[k in RouteKeys]: {prev: RouteKeys | ''; next: RouteKeys | ''}};

export const HOME_ROUTE = {
    prev: '',
    next: 'has',
};

export const ROUTES = {
    has: {prev: '', next: 'animating-grid'},
    'animating-grid': {prev: 'has', next: 'dynamic-viewport-units'},
    'dynamic-viewport-units': {prev: 'animating-grid', next: 'container-queries'},
    'container-queries': {prev: 'dynamic-viewport-units', next: 'text-wrap-balance'},
    'text-wrap-balance': {prev: 'container-queries', next: 'cascade-layers'},
    'cascade-layers': {prev: 'text-wrap-balance', next: 'scoped-css'},
    'scoped-css': {prev: 'cascade-layers', next: 'subgrid'},
    'subgrid': {prev: 'scoped-css', next: 'popover'},
    popover: {prev: 'subgrid', next: 'css-anchor'},
    'css-anchor': {prev: 'popover', next: 'discrete-property'},
    'discrete-property': {prev: 'css-anchor', next: 'scroll-driven-animations'},
    'scroll-driven-animations': {prev: 'discrete-property', next: 'view-transition'},
    'view-transition': {prev: 'scroll-driven-animations', next: 'thanks'},
} satisfies Routes;
