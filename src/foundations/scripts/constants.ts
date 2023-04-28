/**
 * Allows developers to pass custom attributes without requiring it to be a specified prop
 * most commonly used to support various accessibility use cases and/or testing setups (e.g. data-qa)
 */
export type AttrsObject = Record<string, unknown>;