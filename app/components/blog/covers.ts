import LayersCover from "./LayersCover";

// Named React-component covers, referenced by string from frontmatter `coverComponent`.
// Shared between BlogPost (hero) and BlogCard (index thumbnail).
export const COVER_COMPONENTS: Record<string, React.ComponentType> = {
    layers: LayersCover,
};
