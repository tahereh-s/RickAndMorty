import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
    query($page:Int, $filter: FilterCharacter){
        characters(page:$page,filter:$filter){
        info {
            pages
            count
            next
            prev
        }
        results{
                id
                name
                image
                status
                gender
        }
    }        
    }
`