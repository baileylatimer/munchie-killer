// Minimal progressive enhancement for the section.
// Works with Shopify CSP because it's an asset loaded via | script_tag.

class CustomFeatureProduct {
  constructor(root) {
    this.root = root;
    this.form = root.querySelector('.custom-feature-product__form');
    if (!this.form) return;

    // Parse variants JSON for future option handling (harmless if unused)
    const jsonEl = root.querySelector('[data-variants-json]');
    this.variants = jsonEl ? JSON.parse(jsonEl.textContent) : [];

    // Enhanced submit handler with checkout redirect
    this.form.addEventListener('submit', async (e) => {
      e.preventDefault(); // Prevent default form submission
      console.info('[CFP] Submitting form to /cart/add with checkout redirect.');
      
      try {
        // Get form data
        const formData = new FormData(this.form);
        
        // Submit to cart via fetch
        const response = await fetch('/cart/add', {
          method: 'POST',
          body: formData
        });
        
        if (response.ok) {
          console.info('[CFP] Product added to cart successfully. Redirecting to checkout...');
          // Redirect directly to checkout
          window.location.href = '/checkout';
        } else {
          throw new Error('Cart addition failed');
        }
      } catch (error) {
        console.warn('[CFP] AJAX failed, falling back to normal form submission:', error);
        // Fallback: Remove event listener and submit normally
        this.form.removeEventListener('submit', arguments.callee);
        this.form.submit();
      }
    });
  }
}

function initCFP() {
  document.querySelectorAll('.custom-feature-product').forEach((root) => {
    if (!root.__cfp) root.__cfp = new CustomFeatureProduct(root);
  });
}

document.addEventListener('DOMContentLoaded', initCFP);
document.addEventListener('shopify:section:load', initCFP);
document.addEventListener('shopify:section:reorder', initCFP);
