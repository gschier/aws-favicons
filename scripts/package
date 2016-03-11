#!/bin/bash
# Build zip of the app

# Fail on first error
set -e

# Print some useful stuff
VERSION=$(cat package/manifest.json | grep -Po '\d+\.\d+\.\d+')
PACKAGE_NAME="aws-favicons-v$VERSION.zip"
BUILD_DIR=${1:-../builds/}

# Zip the directory
echo "Building AWS Favicons to $BUILD_DIR/$PACKAGE_NAME"
cd package

if [ ! -d "$BUILD_DIR" ]; then
    mkdir "$BUILD_DIR"
fi

zip -rq "$BUILD_DIR/$PACKAGE_NAME" .

echo "Success"
