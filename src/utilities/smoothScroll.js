// Enhanced smooth scroll utility
export const smoothScrollTo = (elementId, offset = 80) => {
  const element = document.getElementById(elementId.replace('#', ''));
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Smooth scroll with intersection observer for better performance
export const observeElement = (element, callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options
  };

  const observer = new IntersectionObserver(callback, defaultOptions);
  if (element) {
    observer.observe(element);
  }
  
  return observer;
};

// Optimized animation variants for better performance
export const optimizedVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  },
  
  item: {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smoother animation
      }
    }
  },

  slideInLeft: {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  slideInRight: {
    hidden: { 
      opacity: 0, 
      x: 50,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  fadeInUp: {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }
};

// Preload images for better performance
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// Lazy load images with intersection observer
export const lazyLoadImage = (img) => {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target;
        const src = image.dataset.src;
        if (src) {
          image.src = src;
          image.classList.remove('lazy');
          observer.unobserve(image);
        }
      }
    });
  });

  imageObserver.observe(img);
};
