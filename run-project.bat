rem Runs application and relevant containers in docker
rem You can use it like so:
rem run-project.bat
@echo off
setlocal enabledelayedexpansion

rem Command to which options will be appended
set "docker_services=docker-compose up -d nginx"

rem Execute the command
!docker_services!

rem Command to which options will be appended
set "npm_build_command=docker-compose run --rm --service-ports npm run dev"

rem Execute the command
!npm_build_command!

endlocal
