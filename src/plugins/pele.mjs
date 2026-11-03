import { render } from 'pele';

/** Render Mermaid fences at build time in Markdown and MDX. */
export default function peleDiagrams({ fileURL }) {
  let diagramIndex = 0;

  return {
    name: 'pele-diagrams',
    options: { position: true },
    code(node, context) {
      if (node.lang !== 'mermaid') return;

      let svg;
      try {
        ({ svg } = render(node.value, {
          idPrefix: `pele-diagram-${diagramIndex++}`,
          responsive: false,
          fontFamily: 'var(--sl-font-system)',
          fontFamilyMono: 'var(--sl-font-system-mono)',
        }));
      } catch (error) {
        throw new Error(`Pele diagram in ${fileURL ?? 'Markdown'} at line ${node.position?.start.line ?? '?'}: ${error.message}`, { cause: error });
      }

      context.replaceNode(node, {
        raw: `<div class="diagram">${svg}</div>`,
        mdxExpressions: false,
      });
    },
  };
}
