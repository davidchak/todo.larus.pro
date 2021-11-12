import sys
import json
import time
from datetime import datetime as dt

time.sleep(5)
print(f"Hello from Python at {dt.now()} utc, args: {sys.argv[1]}, {json.loads(sys.argv[2])['test']}")
