import React from "react"
import {
    BLOCKS,
    MARKS,
    INLINES
} from "@contentful/rich-text-types"

export const articleOptions = {
    renderNode: {
        //==============
        // Whole document body
        //==============
        [BLOCKS.DOCUMENT]: (node, children) => {
            return (
                <div style={{backgroundColor: 'red'}}>
                    { children }
                </div>
            )
        },
        //==============
        // All paragraphs in article
        //==============
        [BLOCKS.PARAGRAPH]: (node, children) => {
            return (
                <div style={{backgroundColor: 'blue'}}>
                    { children }
                </div>
            )
        },
    }
}