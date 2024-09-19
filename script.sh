#!/usr/bin/bash

IP=$(curl https://simpleipcatcher.onrender.com)
user=$1

if [ "$IP"="" ]; then
    echo "A máquina está offline."
else
    echo "IP público: $IP."
    ssh $user@$IP 
fi

