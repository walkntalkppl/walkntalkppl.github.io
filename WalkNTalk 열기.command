#!/bin/bash
# WalkNTalk 로컬 서버 실행 스크립트
# 이 파일을 더블클릭하면 크롬에서 자동으로 열립니다

cd "$(dirname "$0")"

# 포트 사용 중이면 기존 프로세스 종료
PORT=8080
lsof -ti:$PORT | xargs kill -9 2>/dev/null

# Python HTTP 서버 시작 (백그라운드)
python3 -m http.server $PORT &
SERVER_PID=$!

# 서버 준비 대기
sleep 1

# Chrome으로 열기
open -a "Google Chrome" "http://127.0.0.1:$PORT"

echo "WalkNTalk 서버가 http://127.0.0.1:$PORT 에서 실행 중입니다."
echo "이 창을 닫으면 서버도 함께 종료됩니다."
echo ""
echo "종료하려면 이 창을 닫으세요."

# 서버 유지 (창 닫을 때까지)
wait $SERVER_PID
