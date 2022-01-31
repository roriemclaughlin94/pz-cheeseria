# pz-cheeseria

# Tech Stack

## Frontend
Angular, Typescript, RxJS & NgRx

## Backend
Java, Spring using H2 in-memory DB (non-persistent)


## Caveats 
FE and BE as it stands, have their own Dockerfile and are ran on separate containers.

# To run

Docker run both Dockerfiles separetely.

FE served on http://localhost:80  
BE served on http://localhost:8080  
Swagger accessible on http://localhost:8080/swagger-ui/#/  


# Improvements

- Images are links, could be passed as byte[]
- Better unit/integration tests using MockMVC 
- Known issue with nginx server where routing is broken. Have to hit localhost:80 otherwise routing to localhost:80/cheese-selection will fail. (works on ng serve)
- Use a persistent database - Note restarting backend will clear any changes made to cheeses
- Success nods on the FE, cheese changes refresh the list without, say, a success banner
- Backend has little error handling 
- Add authentication, currently backend can be called from any domain
- Get the multi-stage build pipeline working and investigate why the BE image is so huge 
 
