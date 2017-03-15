(function() {
    var supportedServices = [
        "ec2",
        "elasticmapreduce",
        "storagegateway",
        "s3",
        "dynamodb",
        "elasticache",
        "rds",
        "vpc",
        "route53",
        "ses",
        "sns",
        "sqs",
        "swf",
        "cloudfront",
        "iam",
        "cloudwatch",
        "cloudformation",
        "elasticbeanstalk",
        "cloudsearch",
        "directconnect",
        "glacier",
        "datapipeline",
        "elastictranscoder",
        "redshift",
        "opsworks",
        "cloudtrail",
        "appstream",
        "workspaces",
        "kinesis",
        "zocalo",
        "cognito",
        "mobileanalytics",
        "trustedadvisor",
        "directoryservice",
        "codedeploy",
        "config",
        "lambda",
        "workmail",
        "machinelearning",
        "ecs",
        "efs",
        "devicefarm",
        "apigateway",
        "catalog",
        "codepipeline",
        "codecommit",
        "es",
        "waf",
        "inspector",
        "importexport",
        "mobilehub",
        "iot",
        "dms",
        "acm",
        "gamelift"
    ];

    var favicon = null;
    for (var slug in supportedServices) {
        if (window.location.pathname.indexOf('/' + slug) === 0) {
            favicon = '/favicons/' + slug + '.png';
            break;
        }
    }

    if (favicon) {
        var extensionId = chrome.runtime.id;
        var href = 'chrome-extension://' + extensionId + favicon + '?c=' + Date.now();
        var head = document.getElementsByTagName('head')[0];

        var shortcutIcon = document.querySelectorAll('link[rel="shortcut icon"');
        var icon = document.querySelectorAll('link[rel="icon"');

        if (shortcutIcon.length) {
            head.removeChild(shortcutIcon[0]);
        }

        if (icon.length) {
            head.removeChild(icon[0]);
        }

        var link = document.createElement('link');

        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = href;

        head.appendChild(link);
    }
}());
