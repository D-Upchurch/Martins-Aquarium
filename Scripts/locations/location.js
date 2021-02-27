export const Location = (locationObj) => {
    return (
        `<article>
        <dl>
            <dt>Location visited: ${locationObj.locationVisited}</dt>
            <dd>Type of location: ${locationObj.locationType}</dd>
        </dl>
        </article>`
    )
}