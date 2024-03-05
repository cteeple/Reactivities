Creation of project:

Write-Host "About to Create the directory" -ForegroundColor Green

mkdir Reactivities
cd Reactivities

Write-Host "About to create the solution and projects" -ForegroundColor Green
dotnet new sln
dotnet new webapi -n API --use-controllers
dotnet new classlib -n Application
dotnet new classlib -n Domain
dotnet new classlib -n Persistence

Write-Host "Adding projects to the solution" -ForegroundColor Green
dotnet sln add API/API.csproj
dotnet sln add Application/Application.csproj
dotnet sln add Domain/Domain.csproj
dotnet sln add Persistence/Persistence.csproj

Write-Host "Adding project references" -ForegroundColor Green
cd API
dotnet add reference ../Application/Application.csproj
cd ../Application
dotnet add reference ../Domain/Domain.csproj
dotnet add reference ../Persistence/Persistence.csproj
cd ../Persistence
dotnet add reference ../Domain/Domain.csproj
cd ..

Write-Host "Executing dotnet restore" -ForegroundColor Green
dotnet restore

Write-Host "Finished!" -ForegroundColor Green

Client-Side:

Using Yarn 4.0.2 with Vite to create client side
yarn create vite

- project name: client-app
- React + SWC

I was having network issues when installing packages via yarn:
YN0001: │ RequestError: Timeout awaiting 'socket' for 60000ms
at ClientRequest.<anonymous> (C:\Users\cteep\source\repos\Reactivities\client-app\.yarn\releases\yarn-4.0.2.cjs:147:14230)
at Object.onceWrapper (node:events:629:26)
at ClientRequest.emit (node:events:526:35)
at u.emit (C:\Users\cteep\source\repos\Reactivities\client-app\.yarn\releases\yarn-4.0.2.cjs:142:14420)
at TLSSocket.socketErrorListener (node:\_http_client:495:9)
at TLSSocket.emit (node:events:514:28)
at emitErrorNT (node:internal/streams/destroy:151:8)
at emitErrorCloseNT (node:internal/streams/destroy:116:3)
at process.processTicksAndRejections (node:internal/process/task_queues:82:21)
at h (C:\Users\cteep\source\repos\Reactivities\client-app\.yarn\releases\yarn-4.0.2.cjs:143:15132)
at ClientRequest.I (C:\Users\cteep\source\repos\Reactivities\client-app\.yarn\releases\yarn-4.0.2.cjs:143:15376)
at Object.onceWrapper (node:events:628:28)
at ClientRequest.emit (node:events:526:35)
at u.emit (C:\Users\cteep\source\repos\Reactivities\client-app\.yarn\releases\yarn-4.0.2.cjs:142:14420)
at TLSSocket.emitRequestTimeout (node:\_http_client:840:9)
at Object.onceWrapper (node:events:628:28)
at TLSSocket.emit (node:events:526:35)
at Socket.\_onTimeout (node:net:589:8)
at listOnTimeout (node:internal/timers:573:17)
YN0000: └ Completed in 4m 9s
YN0000: · Failed with errors in 4m 9s

To solve this, I had to turn off the IPv6 Network Connectivity
Control Panel\Network and Internet\Network Connections
Ethernet\Properties and uncheck Internet Protocol Version 6

Uses TailwindCss
