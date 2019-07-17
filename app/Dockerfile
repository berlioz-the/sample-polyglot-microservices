###############################################################################
# Step 1 : Builder image
FROM python:2.7-slim AS builder
RUN apt-get update \
    && apt-get install -y --no-install-recommends build-essential gcc
COPY src/requirements.txt . 
RUN pip install --user -r requirements.txt

###############################################################################
# Step 2 : Runner image
FROM python:2.7-slim
COPY --from=builder /root/.local /root/.local
WORKDIR /src
COPY src /src
ENTRYPOINT ["python"]
CMD ["main.py"]