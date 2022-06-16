import { gql } from "apollo-server";

export const apiFiltersTypeDefs  = gql`
    # Inputs são argumentos
    input apiFiltersInput {
        _sort: String
        _order: String
        _start: Int
        _limit: Int
    }

`;