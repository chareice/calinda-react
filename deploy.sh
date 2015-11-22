#!/bin/bash
npm run dist

domain="chareice.com"
host="root@120.26.58.220"

imageName="index.alauda.cn/chareice/blog"
containerName="chareice-blog"

docker build -t $imageName -f Dockerfile .
docker push $imageName

ssh $host << EOF

docker pull $imageName
docker stop $containerName && docker rm $containerName
docker run --name $containerName -e VIRTUAL_HOST=$domain -d $imageName

EOF
