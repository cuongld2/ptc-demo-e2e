1. git clone project
2. Install docker
3. Build image
docker build -t end-to-end-test-demo .
4. Run the test for all browsers
docker run -it end-to-end-test-demo:latest npm run test