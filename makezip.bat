@echo off
cd ..
"D:/Program Files/7-Zip/7z.exe" a Pokemon5e-items.zip "I:\DnD\FoundryVtt\Data\modules\Pokemon5e-items" -xr!*.git* -xr!makezip.bat -xr!Thumbs.db -xr!*.zip -xr!*.pdn -xr!exclude
pause

