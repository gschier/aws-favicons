(function() {
    var supportedServices = [
        "acm",
        "apigateway",
        "appstream",
        "artifact",
        "athena",
        "batch",
        "cloudformation",
        "cloudfront",
        "cloudsearch",
        "cloudtrail",
        "cloudwatch",
        "codebuild",
        "codecommit",
        "codedeploy",
        "codepipeline",
        "cognito",
        "config",
        "datapipeline",
        "devicefarm",
        "directconnect",
        "directoryservice",
        "discovery",
        "dms",
        "dynamodb",
        "ebs",
        "ec2",
        "ecs",
        "efs",
        "elasticache",
        "elasticbeanstalk",
        "elasticmapreduce",
        "elastictranscoder",
        "es",
        "gamelift",
        "glacier",
        "iam",
        "importexport",
        "inspector",
        "iot",
        "kinesis",
        "lambda",
        "lex",
        "machinelearning",
        "mobileanalytics",
        "mobilehub",
        "opsworks",
        "pinpoint",
        "polly",
        "rds",
        "redshift",
        "rekognition",
        "route53",
        "s3",
        "servermigration",
        "servicecatalog",
        "ses",
        "sns",
        "sqs",
        "states",
        "storagegateway",
        "swf",
        "trustedadvisor",
        "vpc",
        "waf",
        "workmail",
        "workspaces",
        "xray",
        "zocalo"
    ];


    var favicon = null;
    for (var slug of supportedServices) {
        console.log(slug);
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
