# Imperative Approach

## Build the container suing Docker

```
docker build -t kub-first-app .
```

## Check minikube status
```
minikube status
```
## If minikube is down
```
minikube start --driver=docker/virtualbox/hyperv
```

## Send the container to the cluster
```
kubectl create deployment first-app --image=kub-first-app
```

## Check deployment error- image pull error

```
kubectl get deployments
```

```
kubectl get pods
```

## Delete the kubernetes deployment

```
kubectl delete deployment first-app
```

```
kubectl get pods
```

## Retag the local image with the dockerhub 

```
docker tag kub-first-app kenken64/kub-first-app
```

```
docker push kenken64/kub-first-app
```

## Recreate deployment
```
kubectl create deployment first-app --image=kenken64/kub-first-app
```

```
kubectl get deployments
```

```
kubectl get pods
```

## Launch minikube dashboard to view the pods of the  cluster

```
minikube dashboard
```

## Create service to expose the app port, utilize ingress load balance distribute traffic  
## to multple pods

```
kubectl expose deployment first-app --type=LoadBalancer --port 8080
```

## Get services from minikube

```
kubectl get services
```

```
minikube service first-app
```

## Crash the server /error

```
kubectl get pods
```

## Scaling kubernetes

```
kubectl scale deployment/first-app --replicas=3
```

```
kubectl get pods
```

## Updating deployment

Change the source code

```
docker build -t kenken64/kub-first-app:2 .
```

```
docker push kenken64/kub-first-app:2
```

Check the deployment

```
kubectl get deployments
```

```
kubectl set image deployment/first-app kub-first-app=kenken64/kub-first-app:2
```

```
kubectl get deployments
```


```
kubectl rollout status deployment/first-app
```

go to browser check the app and minikube dashboard


## Try to deploy an update that fail of

```
kubectl set image deployment/first-app kub-first-app=kenken64/kub-first-app:3
```

```
kubectl rollout status deployment/first-app 
```

doesnt start new pod still up with old pod

```
kubectl get pods
```

## Rollback deployment

```
kubectl rollout undo deployment/first-app
```

```
kubectl get pods
```

```
kubectl rollout status deployment/first-app
```

## Rollback further to specific revision

```
kubectl rollout history deployment/first-app
```

```
kubectl rollout history deployment/first-app --revision=3
```

```
kubecctl rollout undo deployment/first-app --to-revision=1
```

## Clean up resources

```
kubectl delete service first-app
```

```
kubectl delete deployment first-app
```





