# Load vars
source .env

if [ -z "${EXPORT_DIR}" ]; then
  echo "EXPORT_DIR is not set. Please set it in .env file."
  exit 1
fi

# Export emails to directory specified in .env
npm run export-internal -- --outDir "${EXPORT_DIR}"