FROM rust:latest

ENV ROCKET_ADDRESS=0.0.0.0
ENV ROCKET_PORT=8000

RUN USER=root cargo new --bin back
WORKDIR /back

COPY ./Cargo.lock ./Cargo.lock
COPY ./Cargo.toml ./Cargo.toml

RUN cargo build --release
RUN rm src/*.rs

COPY ./src ./src

RUN rm ./target/release/deps/back*
RUN rustup default nightly
RUN cargo install --path .
EXPOSE 8000

CMD ["back"]