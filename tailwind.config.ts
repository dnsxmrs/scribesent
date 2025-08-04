import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			main: 'hsl(var(--main))',
  			'main-foreground': 'hsl(var(--main-foreground))',
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))',
  				background: 'hsl(var(--secondary))'
  			},
  			neutral: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			gray: {
  				'50': '#f8fafc',
  				'100': '#f1f5f9',
  				'200': '#e2e8f0',
  				'300': '#cbd5e1',
  				'400': '#94a3b8',
  				'500': '#64748b',
  				'600': '#475569',
  				'700': '#334155',
  				'800': '#1e293b',
  				'900': '#0f172a'
  			}
  		},
  		borderRadius: {
  			lg: '8px',
  			md: '6px',
  			sm: '4px',
  			base: '6px',
  			none: '0px'
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-inter)',
  				'ui-sans-serif',
  				'system-ui'
  			],
  			mono: [
  				'ui-monospace',
  				'SFMono-Regular'
  			],
  			heading: [
  				'var(--font-inter)',
  				'ui-sans-serif',
  				'system-ui'
  			],
  			base: [
  				'var(--font-inter)',
  				'ui-sans-serif',
  				'system-ui'
  			],
  			inter: [
  				'var(--font-inter)',
  				'ui-sans-serif',
  				'system-ui'
  			]
  		},
  		boxShadow: {
  			elegant: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  			'elegant-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  			'elegant-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  			'elegant-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  			'neo': '4px 4px 0px #000000',
  			'neo-lg': '6px 6px 0px #000000',
  			'neo-xl': '8px 8px 0px #000000',
  			'neo-2xl': '12px 12px 0px #000000'
  		},
  		borderWidth: {
  			'3': '3px',
  			'4': '4px',
  			'5': '5px',
  			'6': '6px'
  		},
  		animation: {
  			marquee: 'marquee 30s linear infinite',
  			'marquee-fast': 'marquee 20s linear infinite',
  			'fade-in': 'fadeIn 0.5s ease-in-out',
  			'slide-up': 'slideUp 0.6s ease-out',
  			'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		keyframes: {
  			marquee: {
  				'0%': {
  					transform: 'translateX(100%)'
  				},
  				'100%': {
  					transform: 'translateX(-100%)'
  				}
  			},
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			slideUp: {
  				'0%': {
  					transform: 'translateY(20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			bounceSubtle: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-4px)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		fontSize: {
  			'6xl': [
  				'3.75rem',
  				{
  					lineHeight: '1',
  					fontWeight: '700'
  				}
  			],
  			'7xl': [
  				'4.5rem',
  				{
  					lineHeight: '1',
  					fontWeight: '700'
  				}
  			],
  			'8xl': [
  				'6rem',
  				{
  					lineHeight: '1',
  					fontWeight: '700'
  				}
  			]
  		}
  	}
  },
  plugins: [],
};
export default config;