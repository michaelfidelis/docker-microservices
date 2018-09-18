FROM node

ENV PORT 3000

EXPOSE 3000

COPY . .
RUN npm install
RUN npm run build

CMD ["node", "dist/index.js"]