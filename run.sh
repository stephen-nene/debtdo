#!/bin/bash
rails s & 
sleep 5  # Optional: Wait a few seconds for Rails server to start

cd client
npm run dev -- --host
