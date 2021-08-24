module.exports = function (migration, context) {
  const region = migration
    .createContentType('region')
    .name('Region')
    .displayField('name');

  region.createField('name').name('Name').type('Symbol').required(true);
  region.createField('countries').name('Options').type('Object');
  region
    .createField('paymentProviders')
    .name('Payment Providers')
    .type('Object');
  region
    .createField('fulfillmentProviders')
    .name('Fulfillment Providers')
    .type('Object');
  region.createField('currencyCode').name('Currency Code').type('Symbol');
  region.createField('medusaId').name('Medusa ID').type('Symbol');
};
