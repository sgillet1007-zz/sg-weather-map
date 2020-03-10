const topControlPanelSelector = '.control-panel.form'
const bottomControlPanelSelector = '.leaflet-container + .control-panel'
const mapAttributionSelector = '.leaflet-container .leaflet-control-attribution'

context('Weather Map UI', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

  it('renders the main UI elements in default state', () => {
    cy.get('header h2').contains('Colorado Weather Map')
    
    cy.get(topControlPanelSelector).find('#demo-simple-select').contains('20') 
   
    cy.get('.leaflet-container').should('be.visible')
    cy.get(mapAttributionSelector).contains('OpenStreetMap') 
    
    cy.get(bottomControlPanelSelector).contains('Satellite Basemap').should('be.visible')
    cy.get(bottomControlPanelSelector).contains('Humidity Heatmap').should('not.exist')
  })

  it('can toggle satellite basemap on/off', () => {
    cy.get(bottomControlPanelSelector).contains('Satellite Basemap').parent().find('input').click().wait(250) // wait not necessary - just for visual
    cy.get(mapAttributionSelector).contains('| Tiles © Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community')
    
    cy.get(bottomControlPanelSelector).contains('Satellite Basemap').parent().find('input').click()
    cy.get(mapAttributionSelector).contains('OpenStreetMap') 
  })

  it('can select option 5 from select and load data onto leaflet map', () => {
    selectOption(5)
    cy.get('.control-panel.form button').contains('Load Data').click().contains('Loading...')
    cy.get('.leaflet-container .leaflet-marker-pane').find('img').should('have.length', 5)
    cy.get(bottomControlPanelSelector).contains('Humidity Heatmap').should('be.visible')
  })
})

const selectOption = value => {
  cy.get('#demo-simple-select').click()
  cy.get(`[data-value="${value}"]`).click()
}
