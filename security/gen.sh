set -e

if [ -z "$1" ]; then
  hostname="$HOSTNAME"
else
  hostname="$1"
fi



openssl req \
  -newkey rsa:2048 -nodes \
  -keyout "$hostname.key.pem" \
  -x509 -sha256 -days 3650 \
  -config sslconf.cfg\
  -out "$hostname.cert.pem"
openssl x509 -noout -text -in "$hostname.cert.pem"