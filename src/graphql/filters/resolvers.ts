import { gql } from "apollo-server";

export const filtersTypeDefs  = gql`

    # Inputs são argumentos
    input FiltersInput {
        _sort: String
        _order: String
        _start: Int
        _limit: Int
    }

`;