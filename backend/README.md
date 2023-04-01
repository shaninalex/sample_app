## Yiazou fake backend

This is just fake backend with static json responses. To not stress API datasources while revelopment.


#### Run

```bash
# run local
flask --app=main --debug run --port=8080 

# run docker
docker compose up -d --build

```