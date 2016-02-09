
var AWS = require('aws-sdk');
var CfnLambda = require('cfn-lambda');

var EC2 = new AWS.EC2({apiVersion: '2015-01-01'});
var Lambda = new AWS.Lambda({apiVersion: '2015-03-31'});

var Delete = CfnLambda.SDKAlias({
  api: EC2,
  method: 'deleteRoute',
  ignoreErrorCodes: [400, 404, 409],
  keys: [
    "DestinationCidrBlock",
    "RouteTableId"
  ]
});

var BoolProperties = [
];

var NumProperties = [
];

var Create = CfnLambda.SDKAlias({
  api: EC2,
  method: 'createRoute',
  forceBools: BoolProperties,
  forceNums: NumProperties,
  keys: [
    "DestinationCidrBlock",
    "RouteTableId",
    "NatGatewayId"
  ]
});

exports.handler = CfnLambda({
  Create: Create,
  Update: Create,
  Delete: Delete,
  TriggersReplacement: [
    "DestinationCidrBlock",
    "RouteTableId",
    "NatGatewayId"
  ],
  SchemaPath: [__dirname, 'schema.json']
});
