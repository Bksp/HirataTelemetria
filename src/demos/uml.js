import html from './uml.html?raw';

export async function init(container) {
    container.innerHTML = html;

    let mermaidObj = window.mermaid;
    if (!mermaidObj) {
        try {
            const module = await import('https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs');
            mermaidObj = module.default;
            window.mermaid = mermaidObj;
        } catch (e) {
            console.error("Failed to import mermaid from CDN", e);
            try {
                const { default: bundled } = await import('mermaid');
                mermaidObj = bundled;
            } catch (e2) {
                console.error("Failed to import bundled mermaid", e2);
                return;
            }
        }
    }

    if (mermaidObj) {
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--bs-primary').trim() || '#0d6efd';
        
        mermaidObj.initialize({
            startOnLoad: false,
            theme: 'base',
            themeVariables: {
                primaryColor: primaryColor,
                primaryTextColor: '#ffffff',
                primaryBorderColor: primaryColor,
                lineColor: '#ffffff',
                secondaryColor: 'rgba(255, 255, 255, 0.1)',
                tertiaryColor: 'rgba(255, 255, 255, 0.05)',
                nodeBorder: primaryColor,
                mainBkg: 'rgba(0, 0, 0, 0.2)',
            }
        });

        const mermaidNodes = container.querySelectorAll('pre.mermaid');
        for (let i = 0; i < mermaidNodes.length; i++) {
            const node = mermaidNodes[i];
            const originalCode = node.textContent.trim();
            const id = `mermaid-dynamic-${i}-${Date.now()}`;
            try {
                const { svg } = await mermaidObj.render(id, originalCode);
                node.innerHTML = svg;
            } catch (e) {
                console.error("Error rendering mermaid:", e);
            }
        }
    }
}
