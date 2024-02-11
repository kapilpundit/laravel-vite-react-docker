rem Runs application and relevant containers in docker
rem You can use it like so:
rem stop-project.bat
@echo off
setlocal enabledelayedexpansion

rem Command to which options will be appended
set "docker_services=docker-compose stop"

rem Execute the command
!docker_services!

endlocal
