(function() {
    var paths = {
        "ec2": "/favicons/0.png",
        "elasticmapreduce": "/favicons/1.png",
        "storagegateway": "/favicons/2.png",
        "s3": "/favicons/3.png",
        "dynamodb": "/favicons/4.png",
        "elasticache": "/favicons/5.png",
        "rds": "/favicons/6.png",
        "vpc": "/favicons/7.png",
        "route53": "/favicons/8.png",
        "ses": "/favicons/9.png",
        "sns": "/favicons/10.png",
        "sqs": "/favicons/11.png",
        "swf": "/favicons/12.png",
        "cloudfront": "/favicons/13.png",
        "iam": "/favicons/14.png",
        "cloudwatch": "/favicons/15.png",
        "cloudformation": "/favicons/16.png",
        "elasticbeanstalk": "/favicons/17.png",
        "cloudsearch": "/favicons/18.png",
        "directconnect": "/favicons/19.png",
        "glacier": "/favicons/20.png",
        "datapipeline": "/favicons/21.png",
        "elastictranscoder": "/favicons/22.png",
        "redshift": "/favicons/23.png",
        "opsworks": "/favicons/24.png",
        "cloudtrail": "/favicons/25.png",
        "appstream": "/favicons/26.png",
        "workspaces": "/favicons/27.png",
        "kinesis": "/favicons/28.png",
        "zocalo": "/favicons/29.png",
        "cognito": "/favicons/30.png",
        "mobileanalytics": "/favicons/31.png",
        "trustedadvisor": "/favicons/32.png",
        "directoryservice": "/favicons/33.png",
        "codedeploy": "/favicons/34.png",
        "config": "/favicons/35.png",
        "lambda": "/favicons/36.png",
        "workmail": "/favicons/37.png",
        "machinelearning": "/favicons/38.png",
        "ecs": "/favicons/39.png",
        "efs": "/favicons/40.png",
        "devicefarm": "/favicons/41.png",
        "apigateway": "/favicons/42.png",
        "catalog": "/favicons/43.png",
        "codepipeline": "/favicons/44.png",
        "codecommit": "/favicons/45.png",
        "es": "/favicons/46.png",
        "waf": "/favicons/47.png",
        "inspector": "/favicons/48.png",
        "importexport": "/favicons/49.png",
        "mobilehub": "/favicons/50.png",
        "iot": "/favicons/51.png",
        "dms": "/favicons/52.png",
        "acm": "/favicons/53.png",
        "gamelift": "/favicons/54.png"
    };

    var favicon = null;
    for (var slug in paths) {
        if (window.location.pathname.indexOf('/' + slug) === 0) {
            favicon = paths[slug];
            break;
        }
    }

    if (favicon) {
        var extensionId = chrome.runtime.id;
        var href = 'chrome-extension://' + extensionId + favicon + '?c=' + Date.now();
        var link = document.createElement('link');

        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = href;

        document.getElementsByTagName('head')[0].appendChild(link);
    }
}());
