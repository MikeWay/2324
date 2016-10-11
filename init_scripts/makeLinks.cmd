for %%D in (C:\course2324\DoNows\DoNow21\node_modules C:\course2324\DoNows\DoNow41\node_modules C:\course2324\DoNows\DoNow51\node_modules C:\course2324\DoNows\DoNow71\node_modules C:\course2324\DoNows\DoNow91\node_modules C:\course2324\FlySharpSolution\node_modules C:\course2324\Samples\Weather\node_modules C:\course2324\Samples\LifeCycle\node_modules) do (
rmdir %%D
mklink /D %%D C:\course2324\node\node_modules
)