import sys
import json
from datetime import datetime as dt

print(f"Hello from Python at {dt.now()}, args: {sys.argv[1]}, {json.loads(sys.argv[2])['test']}")
