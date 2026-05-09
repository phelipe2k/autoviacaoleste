export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Monta caminhos publicos respeitando o basePath usado no GitHub Pages.
export function publicPath(path: `/${string}`) {
  return `${basePath}${path}`;
}
