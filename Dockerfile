FROM node:18-alpine

# 作業ディレクトリ
WORKDIR /app

# パッケージ定義をコピーしてインストール
COPY package*.json ./
RUN npm install

# ソースコードをコピー
COPY . .

# アプリ起動（開発モード）
CMD ["npm", "run", "start:dev"]
