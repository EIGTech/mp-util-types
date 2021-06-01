import { FNOLCollectedAttributes } from "./fnol"

export type VendorAttributes = {
    name: string
    website?: string
    displayEmail?: string
    notificationEmail: string
    displayPhone?: string
    notificationPhone?: string
    additionalProperties?: AdditionalProperties[]
    handles?: HandlerOptions<FnolFilters>[]
  }
  
  export type Vendor = VendorAttributes & {
    id: string
  }
  
  export type DbVendor = Vendor & {
    deleted?: boolean
  }

// the object being filtered needs to be flat in order to maintain property typesafety.
// just pulling out a subset of the policy object for now.
export type FnolFilters = FNOLCollectedAttributes & {
  policyType: string
}

export type AdditionalProperties = {
  key: string
  value: string | number
}

export type HandlerType = "Mitigation" | "Assignment"
export type HandlerOptions<T extends {}> = {
  type: HandlerType
  conditions: Filter<T>
}
export type StaticOperators<A> = {
  kind: "Always";
  field: keyof A;
};

export type ComparisonOperators<A> = {
  kind: "Equals" | "Greater" | "Less" | "Contains"
  field: keyof A
  val: A[keyof A]
}

export type LogicalOperators<A> = {
  kind: "And" | "Or"
  a: Filter<A>
  b: Filter<A>
}

export type Filter<A> = ComparisonOperators<A> | LogicalOperators<A> | StaticOperators<A>
