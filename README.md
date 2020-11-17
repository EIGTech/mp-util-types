# mp-util-types
mp-util-types is designed as a central repository for typescript type definitions in Insight.

## Usage
To use this repository, in the target project's package.json file, as a devDependency, include a reference to this github repo.

For example:
```javascript
  "devDependencies": {
    //[...]
    "mp-util-types": "github:EIGTech/mp-util-types#main",
  }
```

To use in the project, import as you would any other type:
```javascript
import { FNOLEvent } from "mp-util-types"
```

## Contributing
Pull requests are required to commit to `main`

### Branch structure
* `main` - Checkin to master will trigger the CI/CD pipeline to execute. Only release candidates should be checked in to master. 
* `stable` - Holds an active snapshot of production. This branch will be used for emergency roll-back should master get into production with unsatisfactory changes. `stable` branch will only accept pull requests from master after it has been validated in production.
* `feature/*` - Feature branches will be created from master for each piece of work that is occuring on the project.