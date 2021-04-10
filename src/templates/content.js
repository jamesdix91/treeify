import React from "react";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const Content = ({ pageContext }) => {

    const node = pageContext

    console.log(node)
    const Bold = ({ children }) => <span className="bold">{children}</span>
    const Text = ({ children }) => <p className="align-center">{children}</p>

    const options = {
        renderMark: {
            [MARKS.BOLD]: text => <Bold>{text}</Bold>,
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
            [BLOCKS.EMBEDDED_ASSET]: node => {
                console.log(node)
                return (
                    <img
                      //src={`https://${node.data.target.fields.file.url}`}
                      //height={node.data.target.fields.file.details.image.height}
                      //width={node.data.target.fields.file.details.image.width}
                      //alt={node.data.target.fields.description}
                    />
                  );
            },
        },
    }

    return(
        <div style={pageStyles}>
            <h1>{node.title}</h1>
            <div>{renderRichText(node.bodyRichText, options)}</div>
        </div>
    )

}

const pageStyles = {
    backgroundColor: "#CECECE",
    width: "100vw",
    height: "100vh"
}

export default Content