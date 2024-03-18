# Create directories
mkdir -p src/js/{libraries,libraries-extensions,main} src/styles/sass/{00-settings,10-functions,20-mixins,30-base,40-layouts,50-core-components,60-advanced-components,70-third-party-plugins,80-templates,90-utilities}

# Create files
touch src/js/main/main.js src/styles/sass/{00-settings/{_colors.scss,_font-sizes.scss,_font-weights.scss,_fonts.scss,_spacing.scss,_line-heights.scss,_viewports.scss,_index.scss},core.scss,advanced.scss,print.scss} && \
touch src/styles/sass/30-base/{_fonts.scss,_global-styles.scss,_reset.scss,_variables.scss} && \
for dir in src/styles/sass/*; do touch "$dir/_index.scss"; done