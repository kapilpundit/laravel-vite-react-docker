rem Runs artisan command in docker
rem You can pass your argument like so:
rem npm.bat install <my_package>
@echo off
setlocal enabledelayedexpansion

rem Command to which options will be appended
set "base_command=docker-compose run --rm npm"

rem Concatenate provided arguments as options
set "options=%base_command% %*"

rem Execute the command
!options!

endlocal
