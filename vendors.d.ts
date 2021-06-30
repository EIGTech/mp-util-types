import { FNOLCollectedAttributes } from "./fnol"

/**
 * @deprecated Use the new mapping-platform-policies service types `npm i @eigtech/fnol` {@link https://github.com/EIGTech/mapping-platform-fnol}
 */
export type VendorAttributes = {
  name: string
  website?: string
  displayEmail?: string
  notificationEmail: string
  displayPhone?: string
  notificationPhone?: string
  disabled: boolean
  additionalProperties?: AdditionalProperties[]
  handles?: HandlerOptions<FnolFilters>[]
}

/**
 * @deprecated Use the new mapping-platform-policies service types `npm i @eigtech/fnol` {@link https://github.com/EIGTech/mapping-platform-fnol}
 */
export type Vendor = VendorAttributes & {
  id: string
}

/**
 * @deprecated Use the new mapping-platform-policies service types `npm i @eigtech/fnol` {@link https://github.com/EIGTech/mapping-platform-fnol}
 */
export type DbVendor = Vendor & {
  deleted?: boolean
}

/**
 * the object being filtered needs to be flat in order to maintain property typesafety.
 * just pulling out a subset of the policy object for now.
 * @deprecated Use the new mapping-platform-policies service types `npm i @eigtech/fnol` {@link https://github.com/EIGTech/mapping-platform-fnol}
 */
export type FnolFilters = FNOLCollectedAttributes & {
  policyType: string
}

/**
 * @deprecated Use the new mapping-platform-policies service types `npm i @eigtech/fnol` {@link https://github.com/EIGTech/mapping-platform-fnol}
 */
export type AdditionalProperties = {
  key: string
  value: string | number
}

/**
 * @deprecated Use the new mapping-platform-policies service types `npm i @eigtech/fnol` {@link https://github.com/EIGTech/mapping-platform-fnol}
 */
export type HandlerType = "Mitigation" | "Assignment"

/**
 * @deprecated Use the new mapping-platform-policies service types `npm i @eigtech/fnol` {@link https://github.com/EIGTech/mapping-platform-fnol}
 */
export type HandlerOptions<T extends {}> = {
  type: HandlerType
  conditions: Filter<T>
}

/**
 * @deprecated Use the new mapping-platform-policies service types `npm i @eigtech/fnol` {@link https://github.com/EIGTech/mapping-platform-fnol}
 */
export type StaticOperators<A> = {
  kind: "Always";
  field: keyof A;
};

/**
 * @deprecated Use the new mapping-platform-policies service types `npm i @eigtech/fnol` {@link https://github.com/EIGTech/mapping-platform-fnol}
 */
export type ComparisonOperators<A> = {
  kind: "Equals" | "Greater" | "Less" | "Contains"
  field: keyof A
  val: A[keyof A]
}

/**
 * @deprecated Use the new mapping-platform-policies service types `npm i @eigtech/fnol` {@link https://github.com/EIGTech/mapping-platform-fnol}
 */
export type LogicalOperators<A> = {
  kind: "And" | "Or"
  a: Filter<A>
  b: Filter<A>
}

/**
 * @deprecated Use the new mapping-platform-policies service types `npm i @eigtech/fnol` {@link https://github.com/EIGTech/mapping-platform-fnol}
 */
export type Filter<A> = ComparisonOperators<A> | LogicalOperators<A> | StaticOperators<A>
